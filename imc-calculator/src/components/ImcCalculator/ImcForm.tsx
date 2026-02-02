export default function ImcForm(){
    return (
        <div className="flex flex-col items-center bg-gray-200 gap-4">
            <h1>Calculadora IMC</h1>
            <p>Digite seu peso (Kg)</p>
            <input 
            className="bg-white" 
            type="text"/>
            <p>Digite sua altura (Cm)</p>
            <input 
            className="bg-white" 
            type="text"/>
            <button className="bg-blue-400 p-2 rounded-xl cursor-pointer">Calcular</button>
        </div>
    )
}