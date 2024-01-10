export default function WelSec({ name } : {
    name: string
}) {
    return(<div className="bg-white p-4 pt-28 pb-11 text-center">
        <h1 className="w-fit mx-auto text-2xl font-bold">Hi {name}, Welcome to your courses !</h1>
    </div>);
}