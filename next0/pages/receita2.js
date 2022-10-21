import { AcampamentoMagico } from './funcoes/funcao'
import { Verao} from './funcoes/funcao'

export default function QuestaoUm() {
    return (
        <div>
            <table border="1">
                <thead>
                    <Verao/>
                </thead>            
                <tbody>
                    <AcampamentoMagico/>
                </tbody>
            </table>
        </div>
    )
}