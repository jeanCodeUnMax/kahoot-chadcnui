// app/backoffice/page.jsx
'use client';

import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import QuizGrid from '../components/QuizGrid';
import CreateButton from '../components/CreateButton';
import ContextMenu from '@/components/ContextMenu';

export default function BackOfficePage() {
  return (

      <div className="position-relative">
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <div className="d-flex justify-content-end mb-3">
              <CreateButton />
            </div>
            <QuizGrid />
          </Col>
        </Row>
        <ContextMenu />
      </div>
   
  );
}