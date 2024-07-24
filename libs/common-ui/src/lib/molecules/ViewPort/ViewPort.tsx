import { useViewPort } from '../../hooks'


type Props = {}

const ViewPort = () => {
    const size = useViewPort()
    return (
        <div>x: {size.width} y: {size.height}</div>
    )
}

export default ViewPort
