import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const contactItems = [
  {
    icon: FiMapPin,
    title: 'Address',
    text: 'Karunj, Lonavala, Pune, Maharashtra, India - 410405',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    text: '+91 96075 21375',
    href: 'tel:+919607521375',
  },
  {
    icon: FiMail,
    title: 'Email',
    text: 'connect@shivshankarenterprises.com',
    href: 'mailto:connect@shivshankarenterprises.com',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:connect@shivshankarenterprises.com?subject=Website Enquiry&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-amber-600">
            Contact Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Begin a Trade Partnership With Us
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="grid gap-5 lg:col-span-2">
            {contactItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center gap-4 rounded-2xl border border-forest-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-forest-900">{item.title}</h4>
                  <p className="mt-0.5 truncate text-sm text-ink-500">{item.text}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-3xl border border-forest-100 bg-white p-8 shadow-sm lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="name"
                placeholder="Full Name"
                className="rounded-xl border border-forest-100 bg-forest-50/50 px-4 py-3 text-sm outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Business Email"
                className="rounded-xl border border-forest-100 bg-forest-50/50 px-4 py-3 text-sm outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
              />
            </div>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Please describe your sourcing or export requirement..."
              className="resize-none rounded-xl border border-forest-100 bg-forest-50/50 px-4 py-3 text-sm outline-none transition focus:border-forest-500 focus:ring-2 focus:ring-forest-200"
            />
            <button
              type="submit"
              className="rounded-full bg-forest-700 px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-forest-800"
            >
              Submit Enquiry
            </button>
            {sent && (
              <p className="text-sm font-medium text-forest-600">
                Your email client is opening to send this enquiry.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
