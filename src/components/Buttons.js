export default function OutlinedButton(
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
        text
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
            } className = {className}>
                {text}
        </button>
    );
}