import { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { io } from 'socket.io-client';

import { Item } from '../../components/common/ReOrderItem';
import apiClient from '../../config/apiClient';
import { ApiResponse } from '../../types/genericResponse';
import UiCollapsible from '../../components/common/UiCollapse';
import { UiDataItem } from '../../types/UiSectionTypes';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import Modal from '../../components/common/Modal';

const Socket = io('http://localhost:9001');

export default function Editor() {
    const [uiData, setUiData] = useState<UiDataItem[]>([]);
    const [editorData, setEditorData] = useState([
        {
            category: 'header',
            image: '',
        },

        {
            category: 'hero',
            image: '',
        },
        {
            category: 'team',
            image: '',
        },
        {
            category: 'other',
            image: '',
        },
        {
            category: 'footer',
            image: '',
        },
    ]);
    const [roomCode, setRoomCode] = useState<string | null>(null);
    const [isModal, setIsModal] = useState(false);
    const toggleModal = () => {
        setIsModal(!isModal);
    };
    const category = ['Header', 'Footer', 'Hero', 'Team', 'Other'];

    const getData = async () => {
        const res: ApiResponse<UiDataItem[]> = await apiClient.get(
            '/ui-section'
        );
        setUiData(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (roomCode) {
            Socket.on('connect', (socket) => {
                console.log(`Connected: ${Socket.id}`);
                socket.join(roomCode);
                socket.to(roomCode).emit('hi');
            });
        }

        Socket.on('editorDataUpdate', (updatedEditorData) => {
            console.log('Received updated editor data:', updatedEditorData);
            setEditorData(updatedEditorData);
        });

        return () => {
            Socket.off('editorDataUpdate');
        };
    }, [editorData, roomCode]);

    const handleClick = (data: { category: string; image: string }) => {
        const newData = editorData.map((item) => {
            if (item.category === data.category) {
                return {
                    ...item,
                    image: data.image,
                };
            }
            return item;
        });
        setEditorData(newData);
    };

    const handleDelete = (category: string) => {
        const newData = editorData.map((item) => {
            if (item.category === category) {
                return {
                    ...item,
                    image: '',
                };
            }
            return item;
        });
        setEditorData(newData);
    };

    const createCode = () => {
        const code = uuidv4().split('-')[0];
        setRoomCode(code);
    };

    return (
        <div className="grid md:grid-cols-4 gap-4 justify-between grid-cols-2">
            <div className="col-span-4 flex flex-wrap justify-between border items-center rounded-lg p-4">
                <span>Join With Team Code</span>
                <div className="flex gap-4">
                    <Input
                        className="w-36"
                        placeholder="Team Code"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                    />
                    <Button onClick={() => setRoomCode(roomCode)}>
                        Join Room
                    </Button>
                    <Button onClick={createCode}>Create Code</Button>
                </div>
            </div>

            <Reorder.Group
                axis="y"
                values={editorData}
                onReorder={setEditorData}
                className="w-full mx-auto md:col-span-3 col-span-1 border"
            >
                {editorData &&
                    editorData
                        .filter((item) => item.image !== '')
                        .map((item, idx) => (
                            <Item key={idx} item={item}>
                                <img
                                    className="w-full"
                                    src={item?.image}
                                    alt={`Item ${idx}`}
                                />
                            </Item>
                        ))}
            </Reorder.Group>

            <div className="col-span-1  h-full justify-end w-fit border rounded-lg">
                <div className="flex h-[calc(100vh-20rem)] w-full flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700">
                    <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Build your page
                    </h5>
                    <div className="flex min-w-[240px] w-full flex-col gap-1 py-2 font-sans text-base font-normal text-blue-gray-700">
                        {category.map((item) => (
                            <div
                                key={item}
                                role="button"
                                className="flex items-center w-full my-1 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900"
                            >
                                <UiCollapsible
                                    onClick={handleClick}
                                    onDelete={handleDelete}
                                    data={uiData}
                                    title={item}
                                />
                            </div>
                        ))}
                    </div>
                    <Button onClick={() => toggleModal()}>Save</Button>
                </div>
            </div>
            <Modal
                body={
                    <div className="flex flex-col gap-4 w-64">
                        <Reorder.Group
                            axis="y"
                            values={editorData}
                            onReorder={setEditorData}
                            className="w-full mx-auto md:col-span-3 col-span-1 border"
                        >
                            {editorData &&
                                editorData
                                    .filter((item) => item.image !== '')
                                    .map((item, idx) => (
                                        <Item key={idx} item={item}>
                                            <img
                                                className="w-full"
                                                src={item?.image}
                                                alt={`Item ${idx}`}
                                            />
                                        </Item>
                                    ))}
                        </Reorder.Group>
                    </div>
                }
                isModalOpen={isModal}
                onSave={toggleModal}
                toggleModal={toggleModal}
            />
        </div>
    );
}
