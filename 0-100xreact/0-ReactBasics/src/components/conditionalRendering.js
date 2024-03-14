const ConditionalRendering = () => {
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <p>This is a conditional rendering example</p>
            <Item status={true} name={'Deepak Chaudhary'} />
            <Item status={false} name={'Piyush Kumar'} />
            <Item status={true} name={'Harshit Rajput'} />
            <Item status={true} name={'Anshu Singh'} />
        </div>
    )
}

const Item = ({status, name}) => {
    if(status){
        return (
            <div>
                <em>{name} 💞</em>
            </div>
        )
    }else{
        return (
            <div>
                <em>{name}</em>
            </div>
        )
    }
}

export default ConditionalRendering;