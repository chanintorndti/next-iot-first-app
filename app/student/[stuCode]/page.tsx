export default async function Page( {params}:{params:{stuCode: string}} ) {
    const {stuCode} = await params;

    return (
        <>
            <h1 className="text-center font-bold mt-10 text-3xl">
                สวัสดีนักศึกษา
                <br/>
                ID: {stuCode}
            </h1>
            <hr className="w-2/4 m-auto mt-5" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum dicta, sapiente perferendis ut doloremque incidunt ex fugit recusandae vel!
            </p>
        </>
    );
}