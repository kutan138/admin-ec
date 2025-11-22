import { Typography } from 'antd';
import { type FC } from 'react'
const { Title, Paragraph } = Typography;

type Props = {
    title: string,
    subtitle?: string
}

const BaseHeading: FC<Props> = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col gap-1'>
            <Title className="text-3xl font-black leading-tight tracking-tight text-gray-900">{title}</Title>
            {subtitle && <Paragraph className="text-base font-normal leading-normal text-gray-500">{subtitle}</Paragraph>}
        </div>
    )
}

export default BaseHeading