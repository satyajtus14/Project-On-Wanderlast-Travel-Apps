"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaRegTrashCan } from "react-icons/fa6";

export function CancelBookingItem({ bookingId }) {
    const handleCancelBooking = async () => {
      
      try {
        const response = await fetch(`https://wanderlast-travelapps-backend.onrender.com/booking/${bookingId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          console.log('Booking cancelled successfully');
          // Optionally, you can add code here to update the UI after cancellation
        } else {
          console.error('Failed to cancel booking');
        }
      } catch (error) {
        console.error('Error cancelling booking:', error);
      }

      window.location.reload(); // Refresh the page to reflect changes  
    };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="flex items-center gap-2 border border-red-400 text-red-400 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium transition"
      >
        <span>
          <FaRegTrashCan />
        </span>{" "}
        Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking Item permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently <strong>cancel the booking</strong> and
                all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              {/* <Button slot="close" variant="tertiary">
                Cancel
              </Button> */}
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
