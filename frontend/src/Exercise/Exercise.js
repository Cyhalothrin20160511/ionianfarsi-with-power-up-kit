import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* Power-Up Kit: Add fake loading progress bar. */
import LoadingBar from '../LoadingBar';

function Exercise({ BACKEND_API_HOSTNAME }) {

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all 17 lessons that user can choose one to practice
    const fetchLessons = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_API_HOSTNAME}/lessons`);
        setLessons(response.data);
      } catch (err) {
        setError("Failed to fetch lessons data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [BACKEND_API_HOSTNAME]);

  /* Power-Up Kit: Add fake loading progress bar. */
  if (loading) return <LoadingBar />;
  if (error) return <p>{error}</p>;

  return (
    <div className="lesson-navigator">
      {/* Power-Up Kit: Adjust line breaks to beautify the page. */}
      <br />
      <h2>Choose a Lesson</h2>
      <br />
      <div className="lessons-container">
        {lessons.map((lesson) => (
          <Link
            key={lesson.number}
            to="./practice"
            state = {{ ChoosenLesson: lesson.number }}
            className="lesson-nav-card io-button io-text-centerer"
          >
          {/* Power-Up Kit: Add io-text-centerer to center the text. */}
            <div>
              Lesson {lesson.number}:
              <br />
              {lesson.functionality}
            </div>
          </Link>
        ))}
      </div>
      <br /><br />
    </div>
  );
}

export default Exercise;
