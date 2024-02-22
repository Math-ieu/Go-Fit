// Planning.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Participer from './Participer';
import AjoutPlanning from './AjoutPlanning';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";



function PlanningGestionnaire() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/sessions_ferme')
      .then(response => {
        console.log('Sessions from API:', response.data);
        setSessions(response.data);
      });
  }, []);

  const handleClick = (session) => {
    setSelectedSession(session);
  };

  // Group sessions by date
  const sessionsByDate = sessions.reduce((acc, session) => {
    acc[session.date_session] = [...(acc[session.date_session] || []), session];
    return acc;
  }, {});

  const timeSlots = ['06:00-08:00', '08:00-10:00', '10:00-12:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00'];

  return (
    <>
      <Table variant="striped" colorScheme="blue" size={'md'} mb={20} maxWidth={1100} align='center'>
        <Thead>
          <Tr>
            <Th fontFamily={'Poppins'}>Date</Th>
            {timeSlots.map((timeSlot) => (
              <Th key={timeSlot} fontFamily={'Poppins'}>{timeSlot}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(sessionsByDate).map(([date, sessions]) => {
            return (
              <Tr key={date}>
                <Td>
                  {date} ({sessions[0].jour_de_la_semaine})
                </Td>
                {timeSlots.map((timeSlot) => {
                  const session = sessions.find(
                    (session) =>
                      session.debut.slice(0, 5) === timeSlot.split("-")[0]
                  );
                  return (
                    <Td
                      key={timeSlot}
                      onClick={() => session && handleClick(session)}
                      cursor={session ? "pointer" : "default"}
                    >
                      {session ? session.nom_session : ""}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      

    </>
    
  );
}

export default PlanningGestionnaire;