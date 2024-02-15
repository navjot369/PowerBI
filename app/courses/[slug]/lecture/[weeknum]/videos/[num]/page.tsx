
export default function Page({params} : {
    params: any
}) {
    return(<div className="w-full h-[100vh] flex justify-center align-center">Hello {params.num}</div>)
}