import { IoIosCloseCircleOutline } from 'react-icons/io';

function Alert({ alert }) {
    console.log(alert.msg)
    if (alert.msg === undefined) {
        return null;
    }
    return (
        <div className="relative mt-1">
            <p className="absolute top-full flex align-middle"> {alert.type === "error" && <IoIosCloseCircleOutline className='w-15 h-15 text-2xl mr-1 fill-red-500 stroke-red-500' />}{alert.msg}</p>

        </div>
    )
}

export default Alert
