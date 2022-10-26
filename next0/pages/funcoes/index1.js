import { AcampamentoMagico } from './funcao'
import { Verao} from './funcao'

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