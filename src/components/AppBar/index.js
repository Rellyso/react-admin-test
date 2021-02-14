import { AppBar } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    spacer: {
        flex: 1,
    }
})

const MyAppBar = props => {
    const classes = useStyles()

    return (
        
        <AppBar {...props} color="primary">
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />

            <span className={classes.spacer} />
        </AppBar>
    )
} 

export default MyAppBar
