import { useDispatch, useSelector } from 'react-redux';
import { chageTitleAction } from '../../redux/actions';


function MainPage() {
  const dispath = useDispatch()
  const title = useSelector(state => state.titleReducer.title)

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => dispath(chageTitleAction())}>change title</button>
    </div>
  )
}

export default MainPage