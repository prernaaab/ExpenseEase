import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFeedbackList } from "../../redux/feedbackSlice";
import { database } from "../../appwrite/feedback/feedback";
import Marquee from "./MarqueeEffect";

function Feedback() {
  const feedbacks = useSelector((state) => state.feedback.feedbackList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await database.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_COLLECTION_ID_USERFEEDBACK
        );
        // Map the data to match your existing state structure
        const fetchedFeedbacks = response.documents.map((doc) => ({
          Name: doc.Name,
          Description: doc.Description,
        }));

        dispatch(setFeedbackList([...fetchedFeedbacks]));
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };
    fetchFeedbacks();
  }, [dispatch]);

  return (
    <div className="mx-24 max-xl:mx-[10%]">
      <h2 className="font-extrabold text-5xl max-w-[28rem] mb-4 max-lg:text-5xl">
        What our users are saying
      </h2>
      <div className="text-[1.057rem] opacity-50 w-4/6 max-w-[36rem] max-sm:w-full mb-10">
        Read what our satisfied users have to say about their experience with
        our expense tracker web app.
      </div>
      <Marquee item={feedbacks} />
    </div>
  );
}

export default Feedback;
