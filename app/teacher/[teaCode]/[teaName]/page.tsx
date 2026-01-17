export default async function Page( {params}:{params:{teaCode: string, teaName: string}} ) {
    const {teaCode, teaName} = await params;

    return (
        <>
            <h1 className="text-center font-bold mt-10 text-3xl">
                สวัสดีคุณครู
                <br/>
                ID: {teaCode}
                <br/>
                ชื่อ: {teaName}
            </h1>
            <hr className="w-2/4 m-auto mt-5" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum dicta, sapiente perferendis ut doloremque incidunt ex fugit recusandae vel!
            </p>
        </>
    );
}