
import RightCard from '../Section-1/RightCard'

const RightContent = (props) => {

    console.log(props.users);
  return (
    <div id='right' className='h-full p-6 w-2/3 flex rounded-4xl overflow-x-auto flex-nowrap gap-10'>

      {props.users.map((user,index)=>{
        return <RightCard key={index}  color={user.color}id={index} img={user.img} tag={user.tag} />
      })}
    </div>

  )
}

export default RightContent
