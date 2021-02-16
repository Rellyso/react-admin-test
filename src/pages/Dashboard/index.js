import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Title } from 'react-admin'

export default () => {
    return (
        <Card>
            <Title title="Bem vindo ao Dashboard" />
            <CardContent>
                <h1 className="title">Bem vindo ao Dashboard</h1>
            </CardContent>
        </Card>
    )
}
