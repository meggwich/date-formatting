import moment from 'moment';
import { DateTimeProps } from './DateTime';

// HOC для форматирования даты
import React from 'react';

const DateTimePretty = (Component: React.ComponentType<DateTimeProps>) => {
  return (props: DateTimeProps) => {
    // Преобразуем дату в нужный формат
    const date = moment(props.date);
    const now = moment();
    const diffInMinutes = now.diff(date, 'minutes');
    const diffInHours = now.diff(date, 'hours');
    const diffInDays = now.diff(date, 'days');

    let formattedDate;

    if (diffInMinutes < 60) {
      formattedDate = `${diffInMinutes} минут назад`;
    } else if (diffInHours < 24) {
      formattedDate = `${diffInHours} часов назад`;
    } else {
      formattedDate = `${diffInDays} дней назад`;
    }

    // Передаем отформатированную дату в компонент DateTime
    return <Component {...props} date={formattedDate} />;
  };
};

export default DateTimePretty;