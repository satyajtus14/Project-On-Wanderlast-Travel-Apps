"use client";

import {
  Input,
  Select,
  Label,
  Modal,
  Surface,
  TextField,
  ListBox,
  TextArea,
  Button,
  FieldError,
} from "@heroui/react";
import { BiEdit, BiEnvelope } from "react-icons/bi";

export function EditDestinationByModal({ destination }) {
  const {_id, imageUrl,category, price, destinationName, departureDate, duration, country, description } =
    destination;

  const onSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
    // You can access form values using e.target.elements
    const formData = new FormData(e.currentTarget);
    const destinationNameCollect = Object.fromEntries(formData.entries());

    // Example: Log the collected data
    console.log(destinationNameCollect);

    //Call your API to edit the data in the database here
    const response = await fetch(`https://wanderlast-travelapps-backend.onrender.com/destination/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destinationNameCollect)
    }); 
    const result = await response.json();
    console.log('Update Result:', result)
  };

  return (
    <Modal>
      <Button variant="outline" className="rounded-none">
        <BiEdit /> Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="flex items-center gap-2">
                {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEnvelope className="size-5" />
              </Modal.Icon> */}
                <Modal.Heading> Edit Destination</Modal.Heading>
              </div>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="edit-destination-form"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-4 p-10 space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={destinationName} name="destinationName" isRequired>
                        <Label>Destination Name</Label>
                        <Input
                          placeholder="Bali Paradise"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Country */}
                    <TextField defaultValue={country} name="country" isRequired>
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" className="rounded-2xl" />
                      <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                      <Select defaultValue={category}
                        name="category"
                        isRequired
                        className="w-full"
                        placeholder="Select category"
                      >
                        <Label>Category</Label>
                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="Beach" textValue="Beach">
                              Beach
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Mountain" textValue="Mountain">
                              Mountain
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="City" textValue="City">
                              City
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Adventure" textValue="Adventure">
                              Adventure
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Cultural" textValue="Cultural">
                              Cultural
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Luxury" textValue="Luxury">
                              Luxury
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Price */}
                    <TextField defaultValue={price} name="price" type="number" isRequired>
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField defaultValue={duration} name="duration" isRequired>
                      <Label>Duration</Label>
                      <Input
                        placeholder="7 Days / 6 Nights"
                        className="rounded-2xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={imageUrl} name="imageUrl" isRequired>
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/bali-paradise.jpg"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField defaultValue={description} name="description" isRequired>
                        <Label>Description</Label>
                        <TextArea
                          placeholder="Describe the travel experience..."
                          className="rounded-3xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" form="edit-destination-form">Save</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
