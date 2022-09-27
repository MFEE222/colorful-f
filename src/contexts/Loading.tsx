import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
export { default as Loading } from "components/Loading";
import Loading from "components/Loading";

const Context = createContext<{}>("");

type Options = {
    children: ReactNode;
    minTime?: number;
    maxTime?: number;
};
// FIXME: loaded can't plus more times -> state seem can't share between components ? useRef ?
export function LoadingProvider(props: Options) {
    const defaults = {
        minTime: 200,
        maxTime: 600,
    };
    const options: Options = {
        ...defaults,
        ...props,
    };

    const [loaded, setLoaded] = useState<boolean>(true);

    useEffect(() => {
        if (loaded) {
            setTimeout(() => {
                setLoaded(true);
            }, options.maxTime);
        }
    }, [loaded]);

    const start = () => {
        setLoaded(false);
    };
    const end = () => {
        setTimeout(() => {
            setLoaded(true);
        }, options.minTime);
    };

    // render
    return (
        <Context.Provider
            value={{
                start,
                end,
                loaded,
            }}
        >
            <Loading complete={loaded} />
            {props.children}
        </Context.Provider>
    );
}

export function useLoading() {
    return useContext(Context);
}
