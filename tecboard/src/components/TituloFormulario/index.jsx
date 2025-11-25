//props é um OBJETO(pode ser usadado qualaquer nome mas por convenção é ultilizado o "props")
//props.children ou pode ser usado apenas o children sem o props, de maneira desconstruida, apenas mantenha um padrão
export function TituloFormulario({ children }) {
    return (
        <h2>
            {children}
        </h2>
    )
}