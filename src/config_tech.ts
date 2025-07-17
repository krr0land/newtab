export interface Entry {
  category: string;
  product: string;
  url?: string;
}

export interface ConfigGroup {
  title: string;
  entries: Entry[];
}

export const techConfig: ConfigGroup[] = [
  {
    title: "PC",
    entries: [
      {
        category: "Motherboard",
        product: "Gigabyte H370 AORUS Gaming 3 WiFi",
        url: "https://www.gigabyte.com/Motherboard/H370-AORUS-GAMING-3-WIFI-rev-10#kf",
      },
      {
        category: "Processor",
        product: "Intel Core i7 8700 3,2 GHz LGA 1151",
        url: "https://ark.intel.com/content/www/us/en/ark/products/126686/intel-core-i7-8700-processor-12m-cache-up-to-4-60-ghz.html",
      },
      {
        category: "CPU cooler",
        product: "Be Quiet! Pure Rock 2 Black",
        url: "https://www.bequiet.com/en/cpucooler/1842",
      },
      {
        category: "Video card",
        product: "Gigabyte GeForce RTX 2060 Gaming OC PRO (6 GB DDR6) rev. 1.0",
        url: "https://www.gigabyte.com/Graphics-Card/GV-N2060GAMINGOC-PRO-6GD-rev-10#kf",
      },
      {
        category: "RAM",
        product: "Kingston Fury 3x4 GB 2666 MHz, 1x16 GB 3200 MHz (Total: 28 GB)",
      },
      {
        category: "SSD1",
        product: "Kingston A1000 PCIe NVMe M.2 480 GB",
        url: "https://www.kingston.com/datasheets/sa1000m8_us.pdf",
      },
      {
        category: "SSD2",
        product: "Intel 540 M.2 Series 480 GB SATA",
      },
      {
        category: "HDD",
        product: 'Seagate ST2000DM008 2 TB 3,5" 7200 rpm 256 MB cache 6 GB/s',
      },
      {
        category: "Power supply",
        product: "FSP Raider 550 W Silver",
        url: "https://www.fsplifestyle.com/en/product/RaiderII550w.html",
      },
      {
        category: "Case",
        product: "Cooler Master MasterCase Pro 6 RED",
        url: "https://www.coolermaster.com/catalog/legacy-products/cases/mastercase-pro-6/",
      },
      {
        category: "Fans",
        product: "Be Quiet! Light Wings 140mm PWM Triple Pack",
        url: "https://www.bequiet.com/en/casefans/3453",
      },
    ],
  },
  {
    title: "Peripherials",
    entries: [
      {
        category: "Monitor1",
        product: 'Samsung 32" Odyssey G5 G55C QHD 165Hz',
        url: "https://www.samsung.com/dk/monitors/gaming/odyssey-g5-g55c-32-inch-165hz-curved-qhd-ls32cg552euxen/",
      },
      {
        category: "Monitor2",
        product: 'LG 24MP59G-P: 24", 1080p, 75 Hz, IPS',
      },
      {
        category: "Mouse",
        product: "Logitech G305 Wireless",
      },
      {
        category: "Keyboard",
        product: "Keychron K8 Pro RGB Gateron Brown (QMK, Hot-Swap, Wireless, ANSI)",
        url: "https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard?variant=39755425939545",
      },
      {
        category: "Controller",
        product: "Microsoft Xbox Controller (Carbon Black)",
      },
      {
        category: "Mousepad",
        product: "Razer Gigantus V2 XXL",
      },
      {
        category: "Headset",
        product: "Sony WH-1000XM4 Blue",
      },
      {
        category: "Webcam",
        product: "Xiaomi Imilab w88s",
      },
      {
        category: "Sound system",
        product: "Logitech Z607 5.1",
        url: "https://www.logitech.com/hu-hu/product/z607-surround-sound-system?crid=1588",
      },
      {
        category: "Router",
        product: "TP-Link Archer C6",
        url: "https://www.tp-link.com/hu/home-networking/wifi-router/archer-c6/",
      },
    ],
  },
  {
    title: "Home",
    entries: [
      {
        category: "TV",
        product: "TCL 55C805",
      },
      {
        category: "Scale",
        product: "Xiaomi Body Composition Scale S400",
      },
      {
        category: "Light Bulb",
        product: "Yeelight Smart LED Bulb (Color) [YLDP06YL]",
      },
      {
        category: "Smart Home Gateway",
        product: "Xiaomi Mi Smart Home Hub",
      },
      {
        category: "Wireless button",
        product: "Xiaomi Mi Wireless Switch",
      },
      {
        category: "Temp & Humidity Sensor",
        product: "Xiaomi Mi Temperature and Humidity Monitor 2",
      },
      {
        category: "Vacuum cleaner",
        product: "Electrolux Hygienic 600 Cordless",
      },
    ],
  },
  {
    title: "Phone, Tablet, Wearables & Accessories",
    entries: [
      {
        category: "Phone",
        product: "Apple iPhone 14 128 GB Dark Blue",
      },
      {
        category: "Tablet",
        product: "Samsung Galaxy S7 Wi-Fi 128 GB Black",
      },
      {
        category: "Watch",
        product: "Xiaomi Smart Band 8 Pro (Black)",
      },
      {
        category: "External Battery",
        product: "Xiaomi Power Bank 10000 mAh (Integrated Cable)",
      },
      {
        category: "Earbuds",
        product: "Razer Hammerhead TWS (2019)",
      },
    ],
  },
  {
    title: "Notebook",
    entries: [
      {
        category: "Notebook",
        product: "ASUS VivoBook PRO 14 OELD M3401QC",
        url: "https://www.asus.com/laptops/for-home/vivobook/vivobook-pro-14-oled-m3401-amd-ryzen-5000-series/",
      },
      {
        category: "Processor",
        product: "AMD Ryzen 7 5800H - 8 core, 16 thread, up to 4,4 GHz",
      },
      {
        category: "Video card",
        product: "AMD Radeon, GeForce RTX 3050 4 GB",
      },
      {
        category: "RAM",
        product: "16 GB DDR4",
      },
      {
        category: "SSD",
        product: "512 GB M.2 NVMe PCIe 3.0",
      },
      {
        category: "Display",
        product: '14" 2880x1800 16:10 OLED 90Hz',
      },
    ],
  },
];
