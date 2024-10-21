export const success = ({
    statusCode,
    message,
    data,
}: {
    statusCode: number;
    message: string;
    data?: any;
}) => {
    return {
        code: statusCode,
        error: false,
        message,
        data,
    };
};

export const error = ({
    statusCode,
    message,
    data,
}: {
    statusCode: number;
    message?: string;
    data?: any;
}) => {
    if (!message && statusCode === 500) message = 'Internal Server Error';
    if (!message && statusCode === 404) message = 'Not Found';
    if (!message && statusCode === 400) message = 'Bad Request';
    if (!message && statusCode === 401) message = 'Unauthorized';

    return {
        code: statusCode,
        error: true,
        message,
        data,
    };
};