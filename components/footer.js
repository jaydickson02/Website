const Footer = (props) => {
    if (props.render == 'false') {
        return null;
    } else {
        return (
            <div className="w-full text-center py-2">
                <p className="text-white">
                    © 2024. Built by Jay Dickson.
                </p>
            </div>
        );
    }
};

export default Footer;