export default function DonatePage() {
  const paypalLink =
    "https://www.paypal.com/ncp/payment/UV733W8WRMX8G";

  const coffeeOptions = ["$1", "$3", "$6"];

  return (
    <main className="max-w-4xl px-4 py-20 mx-auto">
      {/* HEADER */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Support Spxcels ❤️
        </h1>

        <p className="max-w-2xl mt-4 leading-relaxed text-muted-foreground">
          Thank you for visiting Spxcels. We’re a small independent project
          focused on making phone comparisons simple, honest, and easy to
          understand. Every bit of support helps us improve features, keep the
          platform fast, and continue building something useful for everyone.
        </p>
      </section>

      {/* PREMIUM DONATE CARD */}
      <div className="p-8 space-y-8 border shadow-sm rounded-3xl bg-card border-border">
        {/* WHO WE ARE */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Who we are
          </h2>

          <p className="mt-2 leading-relaxed text-muted-foreground">
            Spxcel is built by a small creator-driven team with one goal —
            helping people make better buying decisions without confusing specs
            or marketing noise. We believe tech information should feel clean,
            clear, and accessible to everyone.
          </p>
        </div>

        {/* SUPPORT OPTIONS */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            Ways you can support
          </h3>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Buy through affiliate links when comparing phones</li>
            <li>• Share Spxcel with friends and communities</li>
            <li>• Support development through a donation</li>
          </ul>
        </div>

        {/* BUY ME COFFEE */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-foreground">
            ☕ Buy me a coffee
          </h3>

          <div className="flex flex-wrap gap-3">
            {coffeeOptions.map((amount) => (
              <a
                key={amount}
                href={paypalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2 text-sm font-medium transition
                  border rounded-xl
                  border-border
                  bg-background
                  text-foreground
                  hover:bg-muted
                  hover:border-foreground/30
                "
              >
                {amount}
              </a>
            ))}
          </div>

          <p className="mt-2 text-xs text-muted-foreground">
            Small support goes a long way 🙏
          </p>
        </div>

        {/* MAIN DONATE BUTTON */}
        <div className="pt-2">
          <a
            href={paypalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-3 text-sm font-semibold
              text-white bg-black dark:bg-white dark:text-black
              rounded-xl
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-xl
              active:scale-95
              will-change-transform
            "
          >
            💛 Donate with PayPal
          </a>

          <p className="mt-3 text-xs text-muted-foreground">
            Secure payment powered by PayPal. Thank you for supporting
            independent development 🙏
          </p>
        </div>
      </div>
    </main>
  );
}