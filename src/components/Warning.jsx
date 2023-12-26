import { ExclamationTriangleIcon } from "@heroicons/react/20/solid"
const Warning = ({ text }) =>
{
    return (
    <p className="bg-orange-50 text-orange-700 mb-4 flex items-center px-6 py-4 rounded-md font-semibold">
        <ExclamationTriangleIcon className="max-w-6 min-w-6 me-2 text-orange-400" />
        { text }
    </p>
    )
}

export default Warning