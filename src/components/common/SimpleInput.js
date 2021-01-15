const SimpleInput = ({input, type, placeholder, className, meta: {touched, error}}) => {
    const inputClassName = `${className}${touched && error ? " input-error" : ""}`;
    return (
        <input
            {...input}
            type={type}
            placeholder={placeholder}
            className={inputClassName}
        />
    );
};

export default SimpleInput;