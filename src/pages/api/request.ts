import { NextApiRequest, NextApiResponse } from "next";

const sendRequest = async (message: string) => {
    const response = await fetch(
        `https://api.telegram.org/bot${`5759961173:AAH_CRbpu_FYfStNHWMAqeGbD0VmIn24YLo`}/sendmessage?chat_id=${`-704118707`}&text=${message}`
    );
    const data = await response.json();

    if (data.ok) {
        return Promise.resolve();
    }

    return Promise.reject('rejectedd');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const message = `${req.body.type} %0AНовая заявка от ${req.body.name}.%0AНомер телефона: ${req.body.phone}.${req.body.car && `%0AМодель машины: ${req.body.car}`}`;
        const response = await sendRequest(message);

        res.json(response);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
};
