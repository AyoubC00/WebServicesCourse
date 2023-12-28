import { InformationCircleIcon } from "@heroicons/react/20/solid"
const Information = ({ text, image }) =>
{
    return (
        <div className="bg-blue-50 px-6 py-4 rounded-md">
            <p className="mb-4 flex items-center text-blue-900 font-semibold">
                    <InformationCircleIcon className="max-w-6 min-w-6 me-2 text-blue-800" />
                    { text }
            </p>
            { image && <img className="ps-8 w-full box-border" src={ image } alt="Illustrating image" /> }
        </div>
    )
}
export default Information