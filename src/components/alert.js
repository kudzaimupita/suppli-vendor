import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, notification, Divider, Space } from 'antd';


const Alert = () => {
    const alerts = useSelector((state) => state.alert);
    const openNotification = (placement, message, type) => {
        notification[type]({
            message: `Notification `,
            description: message,
            placement,
        });
    };

    return (
        <>
            {alerts.map((alert) =>
                openNotification(
                    'topRight',
                    alert.msg,

                    alert.alertType
                )
            )}
        </>
    )
}

export default Alert
