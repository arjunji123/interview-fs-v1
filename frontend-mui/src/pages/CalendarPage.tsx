// src/pages/CalendarPage.tsx

import { Calendar } from 'react-big-calendar';
import { dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns';
import { parse, startOfWeek, getDay } from 'date-fns';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Modal } from '../ui/modal';

import { enUS } from 'date-fns/locale';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

type MyEvent = {
  title: string;
  start: Date;
  end: Date;
};

const CalendarPage = () => {
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventTitle, setEventTitle] = useState('');

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setSelectedDate(slotInfo.start);
    setModalOpen(true);
  };

  const addEvent = () => {
    if (selectedDate && eventTitle.trim()) {
      const newEvent = {
        title: eventTitle,
        start: selectedDate,
        end: selectedDate,
      };
      setEvents([...events, newEvent]);
      setModalOpen(false);
      setEventTitle('');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📅 Calendar</h1>
      <div className="bg-white rounded-xl shadow p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </div>

      {/* Modal */}
<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
  <h2 className="text-xl font-semibold mb-4 text-center">Add Event</h2>

  <div className="space-y-4">
  <input
  type="text"
  placeholder="Event title"
  value={eventTitle}
  onChange={(e) => setEventTitle(e.target.value)}
  className="w-[410px] rounded-md border border-gray-300 px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


    <button
      onClick={addEvent}
      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add Event
    </button>
  </div>
</Modal>

    </div>
  );
};

export default CalendarPage;
