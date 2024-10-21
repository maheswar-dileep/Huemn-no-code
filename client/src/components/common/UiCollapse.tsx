import * as React from 'react';
import { ChevronsUpDown, Trash } from 'lucide-react';

import { Button } from '../../components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './../ui/collapsible';
import { UiDataItem } from '../../types/UiSectionTypes';

type Props = {
    title: string;
    data: UiDataItem[];
    onClick: (data: { category: string; image: string }) => void;
    onDelete: (title: string) => void;
};

const UiCollapsible = ({ data, title, onClick, onDelete }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">{title}</h4>

                <div className="flex items-center justify-end space-x-4 px-4">
                    <Trash
                        size={18}
                        className="text-red-500"
                        onClick={() => onDelete(title.toLowerCase())}
                    />
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </div>
            <CollapsibleContent className="space-y-2">
                {data &&
                    data
                        .filter(
                            (item) =>
                                item.category.toLowerCase() ===
                                title.toLowerCase()
                        )
                        .map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-md border px-4 py-3 font-mono text-sm"
                                onClick={() =>
                                    onClick({
                                        category: item.category.toLowerCase(),
                                        image: item.image,
                                    })
                                }
                            >
                                <img src={item.image} alt={item.category} />
                            </div>
                        ))}
            </CollapsibleContent>
        </Collapsible>
    );
};
export default UiCollapsible;
