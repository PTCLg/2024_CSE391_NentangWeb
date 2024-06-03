function Condition(props) {
    const isLoggedIn = props.isLoggedIn;
    const hasMessages = props.unreadMessages.length > 0;

    return (
        <div>
            {isLoggedIn ? (
                hasMessages ? (
                    <h2>You have {props.unreadMessages.length} unread messages.</h2>
                ) : (
                    <h2>Welcome back!</h2>
                )
            ) : (
                <h2>Please sign up.</h2>
            )}
        </div>
    );


}

export default Condition