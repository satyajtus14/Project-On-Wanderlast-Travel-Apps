"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

export function DeleteDestinationByAlert({destination}) {
 
    const {_id,destinationName} = destination;
    
     const onDelete = async () => {
        // Call your API to delete the destination from the database here
        const response = await fetch(`https://wanderlast-travelapps-backend.onrender.com/destination/${_id}`, {
          method: 'DELETE',
        }); 
        const result = await response.json();
        console.log('Delete Result:', result);
        redirect('/destinations');
        
      };

  return (
    <AlertDialog>
      <Button variant="danger-soft" className="rounded-none"> 
          <BiTrash /> Delete
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={onDelete}>
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
