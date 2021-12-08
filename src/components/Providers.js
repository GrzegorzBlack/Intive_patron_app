
import {SearchTextsProvider} from "../contexts/SearchTextsContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {SearchParamsProvider} from "../contexts/SearchParamsContext";

const Providers = (props) => {
    return (
        // <AdminProvider>
        //     <UserProvider>
                <SearchTextsProvider>
                  <SearchParamsProvider>
                    <LanguageProvider>
                        {props.children}
                    </LanguageProvider>
                  </SearchParamsProvider>
               </SearchTextsProvider>
        /*    </UserProvider>*/
        /*</AdminProvider>*/
    );
};

export default Providers;