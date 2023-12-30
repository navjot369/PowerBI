export default function Section7() {
    return(<div className="bg-[#e8ecee] py-14 shadow-inner text-center flex flex-col items-center my-11">
        <div className="text-4xl font-bold my-6">Join Our Community</div>
        <div className="text-md text-[#555] my-2 w-96 sm:w-auto">Enter your email address to register to our newsletter subscription delivered on regular basis!</div>
        <div className="flex flex-col sm:flex-row mx-auto w-fit items-strech">
            <form>
                <input type="text" className="bg-white rounded-0 p-2 w-96" placeholder="Enter your Email"/>
                <button className="bg-[#ff9635] text-sm rounded-full text-white px-4 py-2 m-4 w-96 sm:w-auto">Subscribe</button>
            </form>
        </div>
    </div>)
}