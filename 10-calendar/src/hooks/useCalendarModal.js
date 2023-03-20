import { addHours, differenceInSeconds } from "date-fns";
import { useMemo, useState } from "react";

export const useCalendarModal = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValue, setFormValue] = useState({
    title: "nicolas",
    notes: "jrx",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClas = useMemo(() => {
    if (!formSubmitted) return "";

    return formValue.title.length > 0 ? "" : "is-invalid";
  }, [formValue.title, formSubmitted]);

  const onInputChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValue({
      ...formValue,
      [changing]: event,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const diference = differenceInSeconds(formValue.end, formValue.start);

    if (isNaN(diference) || diference <= 0)
      return Swal.fire(
        "fechas incorrentas",
        "revisar las fechas seleccionadas",
        "error"
      );

    if (formValue.title.length <= 0) return;
  };

  return {
    formValue,
    titleClas,
    onInputChange,
    onDateChanged,
    onSubmit,
  };
};
