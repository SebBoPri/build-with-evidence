import { useEffect, useRef, useState, type FormEvent } from "react";

const ENDPOINT = "https://formspree.io/f/xvkpnpva";

type Status = "idle" | "pending" | "success" | "error";

type FormspreeError = { field?: string; message: string };
type FormspreeResponse = { errors?: FormspreeError[] };

const fieldClass =
  "mt-3 block w-full border border-input bg-transparent px-4 py-3 text-base text-foreground outline-none transition-colors focus:border-foreground";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("pending");
    setError("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      const data = (await response.json().catch(() => null)) as FormspreeResponse | null;
      const detail = data?.errors?.map((e) => e.message).join(". ");
      setError(detail || "Something went wrong. Please try again, or email me directly.");
      setStatus("error");
    } catch {
      setError("Could not reach the server. Please check your connection, or email me directly.");
      setStatus("error");
    }
  }

  return (
    <div className="mt-10">
      {status === "success" ? (
        <div
          ref={successRef}
          tabIndex={-1}
          role="status"
          className="max-w-xl border border-border px-6 py-8 text-lg text-foreground outline-none"
        >
          Thanks. I&rsquo;ll come back to you within two working days.
        </div>
      ) : (
        <form
          action={ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          aria-busy={status === "pending"}
          className="max-w-xl"
        >
          {/* Formspree honeypot. Bots fill it, people never see it. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <input type="hidden" name="_subject" value="Discovery Sprint enquiry" />

          <div className="space-y-7">
            <div>
              <label htmlFor="name" className="label-mono">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="label-mono">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className="label-mono">
                What are you trying to work out?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`${fieldClass} resize-y`}
              />
            </div>
          </div>

          {status === "error" ? (
            <p role="alert" className="mt-7 text-sm text-foreground">
              {error}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "pending"}
              className="group inline-flex h-12 items-center gap-3 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "pending" ? "Sending" : "Let's explore together"}
              <span
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>
            </button>
            <a
              href="mailto:hello@slipstreamlabs.se"
              className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              hello@slipstreamlabs.se
            </a>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Your details are sent to me by email and used only to reply to your enquiry. Nothing
            else.
          </p>
        </form>
      )}
    </div>
  );
}
