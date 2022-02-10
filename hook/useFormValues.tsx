import React from 'react';
import { useRouter } from 'next/router';

type Values = {
  foo: string;
  bar: string;
};

type LoanSelectionContextProps = {
  values: Values;
  setValues: (props: Values) => void;
};

const defaultValues = {
  foo: "fooDefault",
  bar: "barDefault",
}

const ValuesContext = React.createContext<LoanSelectionContextProps>({
  values: defaultValues,
  setValues: () => { },
});


function ValueProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const initialValues = {
    foo: router.query.foo?.toString() || defaultValues.foo,
    bar: router.query.bar?.toString() || defaultValues.bar,
  }

  const [values, setValuesState] = React.useState(initialValues);

  function setValues(props: Values) {
    console.log("do some stuff")
    setValuesState(props)
  }

  return (
    <ValuesContext.Provider value={{ values, setValues }}>
      {children}
    </ValuesContext.Provider>
  );
}

const ValuesConsumer = ValuesContext.Consumer;

function useValues() {
  const context = React.useContext(ValuesContext);
  return context;
}

export { ValueProvider, ValuesConsumer, useValues };
