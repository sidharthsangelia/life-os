import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
  return (
    <main className="max-w-md mx-auto mt-10 p-6  shadow rounded">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes</h1>
      <form className="space-y-4">
        <div>
          <Label htmlFor="note" className="block mb-1">
            Note Title
          </Label>
          <Input type="text" id="note" placeholder="Meeting notes" />
        </div>
        <div>
          <Label htmlFor="description" className="block mb-1">
            Description
          </Label>
          <Textarea id="description" placeholder="Description Here..." />
        </div>
        <Button type="submit" className="w-full">
          Add Note
        </Button>
      </form>
    </main>
  );
}
