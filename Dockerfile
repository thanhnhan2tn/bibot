FROM node:8.9.4
#FROM node:alpine
ENV binanceKey="XrRCZKPi31YGJoHkaHHRnOzsNU76iJl1AurqGsQ9fDSBFAJIAHrqGlTM9yNaGIZ5"
ENV binanceSecret="ImmGndYB4ptmwNx8hHNLiSoGZGWECSlXfCoePa3NWwXsXeFhvNF12pSmjT1Axt18"
ENV teleKey="1730215444:AAF14MvngpJCtgKkhcj2pahaH9Yw3QyT2D8"
# (for US numbers, add a 1 infront of area code)
ADD ./ /app
WORKDIR /app
ENTRYPOINT ["yarn", "start”]
