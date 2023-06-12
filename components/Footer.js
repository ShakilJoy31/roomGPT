

const Footer = () => {
    return (
        <div className="px-32 pb-6">
            <div className="flex items-center justify-between">
            <h1>Powered by <span className="underline">Replicate</span>, <span className="underline">Upload</span>, and <span className="underline">Vercel</span></h1>

            <div className="flex gap-x-4">
                <img src="https://i.ibb.co/MfCdFXs/Vector.png" alt="" />
                <img src="https://i.ibb.co/4FCzR7d/Vector-1.png" alt="" />
            </div>

            <p>Created by <span className="underline">Hassan</span> (hassan@roomgpt.io)</p>
        </div>
        </div>
    );
};

export default Footer;