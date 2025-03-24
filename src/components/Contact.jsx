"use client";
import { useState } from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const formInit = { name: "", email: "", message: "" };
  const [form, setForm] = useState(formInit);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setForm(formInit);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <GlowingStarsBackgroundCard className={"min-h-fit"}>
      <GlowingStarsTitle className={"text-center my-4 text-3xl"}>
        Send me a message!
      </GlowingStarsTitle>
      <div className="flex justify-center">
        <GlowingStarsDescription className={"text-center w-full"}>
          Got a question or proposal, or just want to say hello? Go ahead.
        </GlowingStarsDescription>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[600px] mx-auto mt-8"
      >
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <Label htmlFor="fullname">Your name</Label>
            <Input
              value={form.name}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              id="fullname"
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Enter your email address"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
          </div>
        </div>
        <div className="w-full">
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            value={form.message}
            onChange={(e) =>
              setForm((prev) => {
                return { ...prev, message: e.target.value };
              })
            }
          />
        </div>
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-white font-medium text-slate-800"
          type="submit"
        >
          Shoot &rarr;
        </button>
      </form>
    </GlowingStarsBackgroundCard>
  );
};

export default Contact;
