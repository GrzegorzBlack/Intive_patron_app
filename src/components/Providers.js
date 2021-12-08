import TextProvider from "../contexts/TextProvider";
import LocalStorageProvider from "../contexts/LocalStorageProvider";


const Providers = (props) => {
    return (
        // <AdminProvider>
        //     <UserProvider>
                <LocalStorageProvider>
                    <TextProvider>{props.children}</TextProvider>
               </LocalStorageProvider>
        /*    </UserProvider>*/
        /*</AdminProvider>*/
    );
};

export default Providers;