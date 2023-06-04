function GoogleMap() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13762.995514053826!2d-9.567402138428323!3d30.414865944138235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b62c2865c773%3A0x29f348e7f904b5c4!2sCit%C3%A9%20Dakhla%2C%20Agadir%2080000!5e0!3m2!1sen!2sma!4v1685907308332!5m2!1sen!2sma"
        width="600"
        height="450"
        className="w-full mb-6 rounded-md shadow-sm"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default GoogleMap
