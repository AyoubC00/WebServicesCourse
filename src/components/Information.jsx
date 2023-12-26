import { InformationCircleIcon } from "@heroicons/react/20/solid"
const Information = ({ text }) =>
{
    return (
        <p className="mb-4 flex items-center bg-blue-50 px-6 py-4 rounded-md text-blue-900 font-semibold">
                <InformationCircleIcon className="max-w-6 min-w-6 me-2 text-blue-800" />
                { text }
        </p>
    )
}
export default Information