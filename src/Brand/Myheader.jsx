import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button } from 'antd';

const Myheader = ({ getData, getNamePrand }) => {

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        },
    ];
    return (
        <>
            <div className="header d-flex justify-content-between align-items-center p-2">
                <div className="profile d-flex gap-2">
                    <p>{getData}</p>
                    <p>Products</p>
                </div>

                <Dropdown menu={{ items }} className='drop'>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Button>Featured</Button>
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </>
    )
}

export default Myheader