export function OutlinedButton(
    {
        borderColor = "white", 
        borderWidth = "1px", 
        borderRadius = "5px",
        borderStyle = "solid",
        backgroundColor = "transparent", 
        color = "white",
        fontSize = "18px",
        fontFamily = "Monsterrat",
        padding = "3px 15px 3px 15px",
        className,
        text,
        onClick
    }
) {

    return (
        <button style={
                {
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    borderRadius: borderRadius,
                    borderStyle: borderStyle,
                    backgroundColor: backgroundColor,
                    color: color,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    padding: padding
                }
            } className = {className} onClick = {onClick}>
                {text}
        </button>
    );
}

export function BasicButton(
    {
        borderColor = "var(--primary)", 
        borderWidth = "1px", 
        borderRadius = "5px",
        borderStyle = "solid",
        backgroundColor = "var(--primary)", 
        color = "white",
        fontSize = "18px",
        fontFamily = "Monsterrat",
        padding = "5px 15px 5px 15px",
        marginTop = "10px",
        className,
        text,
        onClick
    }
) {

    return (
        <button style={
                {
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    borderRadius: borderRadius,
                    borderStyle: borderStyle,
                    backgroundColor: backgroundColor,
                    color: color,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    padding: padding,
                    cursor:"pointer",
                    marginTop: marginTop
                }
            } className = {className} onClick = {onClick}>
                {text}
        </button>
    );
}